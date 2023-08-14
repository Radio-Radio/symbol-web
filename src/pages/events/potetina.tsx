import FoteisonImage from '@/assets/events/potetina/foteison.webp';
import PotetinaTwitterHeader from '@/assets/events/potetina/potetina-twitter-header.png';
import TomatoFaceImage from '@/assets/events/potetina/poteto-face.webp';
import PotetoImage from '@/assets/events/potetina/poteto.webp';
import TomatinaMosaicCenterImage from '@/assets/events/tomatina/mosaic-center.webp';
import PasomiTomatoImage from '@/assets/events/tomatina/pasomi-tomato.webp';
import SymbolTomatinaTwitterCard from '@/assets/events/tomatina/symbol-tomatina-header.png';
import TomatinaGraphImage from '@/assets/events/tomatina/tomatina-graph.webp';
import TomatinaHirobaImage from '@/assets/events/tomatina/tomatina-hiroba.webp';
import SymbolLogoImage from '@/assets/logo/symbol.webp';
import InViewAnimation from '@/components/atom/InViewAnimation';
import LinkButton from '@/components/atom/LinkButton';
import Footer from '@/components/moleculs/Footer';
import Header from '@/components/moleculs/Header';
import MediaCard from '@/components/moleculs/MediaCard';
import { lang, langSelecter } from '@/languages';
import styled from '@emotion/styled';
import Button from '@mui/material/Button';
import ButtonBase from '@mui/material/ButtonBase';
import Card from '@mui/material/Card';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemSecondaryAction from '@mui/material/ListItemSecondaryAction';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps, NextPage } from 'next/types';

interface Props {
  i18n: lang['index'];
}

const FancyTomato = styled('div')({
  animation: '8s linear 10s infinite alternate fancy_tomato',
  overflow: 'hidden',
  zIndex: -1,
  opacity: 0,
  '@keyframes fancy_tomato': {
    '0%': {
      transform: 'translateX(4000px)',
      opacity: 0,
    },
    '50%': {
      transform: 'translateX(4000px)',
      opacity: 1,
    },
    '60%': {
      transform: 'translateX(-4000px)',
      opacity: 1,
    },
    '100%': {
      transform: 'translateX(-4000px)',
      opacity: 0,
    },
  },
});

function ThrowTomato(props: { num: number }) {
  return (
    <FancyTomato
      style={{
        rotate: `${[10, 23, 25, 40, 60, 70, 88][props.num] * 10 * 10}deg`,
        animationDelay: `${[1, 2.3, 2.5, 4.0, 6.0, 7.0, 8.8][props.num] * 10}s`,
      }}
    >
      <Image style={{ zIndex: -1 }} src={PotetoImage.src} alt='throw tomato' width={200} height={200} />
    </FancyTomato>
  );
}

const PotetinaEvent: NextPage<Props> = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{`${i18n.meta_page_title} | Potetina`}</title>
        <meta name='description' content={'ポテティーナのイベントページです'} />
        <meta name='twitter:title' content={'ポテティーナ'} />
        <meta name='twitter:description' content={'ポテティーナのイベントページです'} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={`${process.env.NEXT_PUBLIC_HOSTING_URL}${PotetinaTwitterHeader.src}`} />
      </Head>
      <Header />
      <Toolbar style={{ marginTop: '20px' }} />
      <div style={{ position: 'fixed', zIndex: -2 }}>
        {new Array(6).fill(0).map((_, i) => (
          <ThrowTomato num={i} key={i} />
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          height: '100svh',
          width: '100%',
          zIndex: -1,
          backgroundImage: `url(${PotetoImage.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          filter: 'brightness(40%)',
          backgroundPosition: 'center bottom',
        }}
      />
      <Container maxWidth='lg' style={{ marginBottom: '5vh' }}>
        <div
          style={{
            height: '80svh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            marginBottom: '20svh',
          }}
        >
          <Typography
            variant='h1'
            fontWeight='bold'
            textAlign='center'
            gutterBottom
            sx={{ fontSize: { xs: '3rem', sm: '6rem', md: '8rem', lg: '10rem' } }}
          >
            Potetina
          </Typography>
          <Typography variant='h5' fontWeight='bold' textAlign='center'>
            ポテトとトマトの文化祭
          </Typography>
        </div>
        <InViewAnimation direction='up' threshold={0.2} style={{ minHeight: '60svh', marginBottom: '5svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            デジタルポテトを投げまくる
          </Typography>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item xs={12} md={7}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                このイベントはブロックチェーン「Symbol」の「Tomatina」というイベントのサイドイベントです。 8月30日は
                Potetina の日です。公開されるゲームやツールを楽しんだり、Poteto を一斉に投げまくりましょう！
              </Typography>
              <LinkButton
                href='/events/tomatina'
                ariaLabel='mosaic link'
                isNewTab
                variant='outlined'
                sx={{ width: { xs: '100%', sm: '100%', md: '300px' } }}
              >
                Symbol Tomatina とは？
              </LinkButton>
            </Grid>
            <Grid item xs={12} md={5}>
              <div
                style={{
                  width: '100%',
                  textAlign: 'center',
                  marginTop: '5svh',
                  marginBottom: '5svh',
                  overflow: 'clip',
                }}
              >
                <Image src={TomatoFaceImage} height={250} width={250} alt='tomato image' />
              </div>
            </Grid>
          </Grid>
          <Stack alignItems={'center'} justifyContent={'center'} height={'80svh'}>
            <iframe
              src='https://drive.google.com/file/d/1Uw07XST0hZywiNveDm6DXxqU1GbwN1qw/preview'
              width='640'
              height='480'
              allow='autoplay'
            />
          </Stack>
        </InViewAnimation>
        <InViewAnimation direction='up' threshold={0.2} style={{ minHeight: '60svh', marginBottom: '5svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            Potetina とは？
          </Typography>
          <Grid container spacing={1} alignItems={'center'} style={{ marginBottom: '3rem' }}>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                Potetina はゲームを楽しんだり、 Foteison を使って Poteto や Kirari を投げまくるイベントです。例えば...
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <List>
                <ListItem>
                  <ListItemText
                    primary='Poteto や Kirari を誰かに投げまくる'
                    secondary='Foteison を使ってどんどん投げましょう。これを機会に他のチェーンの人にも投げてみて Poteto を集める仲間を増やしても...？'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='公開されるゲームやツールを楽しむ'
                    secondary='イベント実施日は個人が自由にツールやゲームを公開します。よって、どの程度のゲームやツールが公開されるかは未知数ですが、例年はとても楽しいゲームが公開されています。期待して参加しましょう！'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='別チェーンの無料ゲームやツールを楽しむ'
                    secondary='ゲームはベリロンゲーム以外にブロックチェーン Symbol 側のゲームも公開されます。トークンやウォレットを保有していなくとも参加できるものも多い為、このページに掲載されているもの等是非プレイしてみましょう！'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='参加賞を貰おう 1'
                    secondary='ゲームの中にはプレイする事でネイティブ通貨の投げ銭やNFTが貰えるケースもあります。情報はこのサイトで発信します。欲しいものがあったら是非ゲットして下さい！'
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary='参加賞を貰おう 2'
                    secondary='本イベント中に参加頂いた人々へ後日 Symbol フルオンチェーンベリロン NFT のプレゼントも企画しています。数に限りがある為、参加者多数の場合は抽選となりますが、この Tomatina vs Potetina 限定の NFT を是非楽しみにしていて下さい'
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </InViewAnimation>
        <div style={{ height: '5svh' }} />
        <InViewAnimation direction='up' threshold={0.2} style={{ minHeight: '60svh', marginBottom: '5svh' }}>
          <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} gutterBottom>
            以前の開催の様子
          </Typography>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                オンラインでトマトをぶつけあうゲームをプレイしたり、RPGゲーム等が公開されました。
                トマトを投げると実際にトランザクションが作成され、ブロックチェーン上に結果が記録されるブロックチェーンゲームです。
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <div style={{ width: '100%', textAlign: 'center', marginTop: '5svh', marginBottom: '5svh' }}>
                <iframe
                  width='560'
                  height='315'
                  src='https://www.youtube.com/embed/mebNYjgFMms'
                  title='YouTube video player'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen={true}
                  style={{ border: 0, maxWidth: '100%' }}
                ></iframe>
              </div>
            </Grid>
          </Grid>
        </InViewAnimation>
        <InViewAnimation direction='up' threshold={0.2} style={{ minHeight: '60svh', marginBottom: '5svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            Foteison とは？
          </Typography>
          <Grid container spacing={3} alignItems={'center'}>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                Twitter/Discord
                の投げ銭ツールです。ウォレット・ガス代不要で誰でもトークンの投げ銭が出来ます。初めて利用する方は事前にアカウントを作成しておきましょう。
              </Typography>
              <Typography color='error' variant='body2' style={{ marginBottom: '1rem' }}>
                注意： ログイン時の認証は twitter を選択して下さい
              </Typography>
              <LinkButton
                href='https://twitter.com/foteison'
                ariaLabel='mosaic link'
                isNewTab
                variant='outlined'
                sx={{ width: { xs: '100%', sm: '100%', md: '300px' } }}
              >
                Foteison Twitter
              </LinkButton>
            </Grid>
            <Grid item xs={12} md={8}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '439px',
                  textAlign: 'center',
                  marginTop: '5svh',
                  marginBottom: '5svh',
                }}
              >
                <Image
                  fill
                  priority={false}
                  src={FoteisonImage}
                  sizes='600px'
                  style={{ objectFit: 'cover', objectPosition: 'left top', borderRadius: '10px' }}
                  alt='foteison image'
                  onClick={() => window.open('https://twitter.com/foteison', '_blank')}
                />
              </div>
            </Grid>
          </Grid>
        </InViewAnimation>

        <InViewAnimation direction='up' threshold={0.2} style={{ minHeight: '60svh', marginBottom: '20svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            Symbol とは？
          </Typography>
          <Grid container spacing={6} alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                Symbol は ブロックチェーン NEM に新たな思想を吹き込んだ L1 パブリックブロックチェーンです。
                安価な手数料でフルオンチェーン NFT を発行したり、非エンジニアでも扱える簡単なコントラクトが魅力です。
              </Typography>
              <LinkButton
                href='/'
                ariaLabel='home'
                isNewTab
                variant='outlined'
                sx={{ width: { xs: '100%', sm: '100%', md: '300px' } }}
              >
                Symbol について知る
              </LinkButton>
            </Grid>
            <Grid item xs={12} md={6}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '200px',
                  textAlign: 'center',
                  marginTop: '5svh',
                  marginBottom: '5svh',
                }}
              >
                <Image
                  fill
                  priority={false}
                  src={SymbolLogoImage}
                  sizes='200px'
                  style={{ objectFit: 'contain' }}
                  alt='symbol logo image'
                />
              </div>
            </Grid>
            <Grid item xs={12} style={{ marginBottom: '5svh' }} />
            <Grid item xs={12} md={6}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                公開されているゲームは Wallet なしでプレイできるものもありますが、当日慌てない為にも事前に Wallet
                を作成しておきましょう。
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Button
                  variant='outlined'
                  fullWidth
                  LinkComponent={Link}
                  href='https://coin-view.net/symbolwallet-mobile/'
                >
                  モバイルウォレット-1
                </Button>
                <Button
                  variant='outlined'
                  fullWidth
                  LinkComponent={Link}
                  href='https://www.aemalgorithm.io/aem-plus/main'
                >
                  モバイルウォレット-2
                </Button>
                <Button
                  variant='outlined'
                  fullWidth
                  LinkComponent={Link}
                  href='https://docs.symbol.dev/ja/wallets.html#wallet-desktop'
                >
                  デスクトップウォレット
                </Button>
                <Button
                  fullWidth
                  variant='outlined'
                  LinkComponent={Link}
                  href='https://chrome.google.com/webstore/detail/sss-extension/llildiojemakefgnhhkmiiffonembcan?hl=ja'
                >
                  ブラウザ拡張署名ツール
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </InViewAnimation>
        <InViewAnimation direction='right' threshold={0.2} style={{ marginBottom: '10svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            FAQ
          </Typography>
          <Grid container spacing={1} alignItems={'center'} style={{ marginBottom: '3rem' }}>
            <Grid item xs={12} md={4}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                Potetina はゲームを楽しんだり、 Foteison を使って Poteto や Kirari を投げまくるイベントです。例えば...
              </Typography>
            </Grid>
            <Grid item xs={12} md={8}>
              <List>
                <ListItem disablePadding>
                  <ListItemText
                    primary='Foteison の使い方が分かりません'
                    secondary='X Hash Tag #HelpFoteison をつけて当日投稿しましょう。誰かが助けてくれるでしょう'
                    style={{ marginBottom: '2rem' }}
                  />
                  <ListItemSecondaryAction style={{ position: 'initial' }}>
                    <Button
                      style={{ maxWidth: '300px', width: '100%' }}
                      variant='outlined'
                      onClick={() => {
                        const body = [
                          encodeURIComponent('[ HELP ]'),
                          encodeURIComponent('Foteison の使い方が分かりません'),
                          encodeURIComponent('#HelpFoteison #Symbol #Tomatina #Potetina'),
                        ].join('%0A%0A');
                        window.open(`https://twitter.com/intent/tweet?text=${body}`, '_blank');
                      }}
                    >
                      投稿する
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary='Symbol Wallet の使い方が分かりません'
                    secondary='X Hash Tag #symbol をつけて当日投稿しましょう。誰かが助けてくれるでしょう'
                    style={{ marginBottom: '2rem' }}
                  />
                  <ListItemSecondaryAction style={{ position: 'initial' }}>
                    <Button
                      style={{ maxWidth: '300px', width: '100%' }}
                      variant='outlined'
                      onClick={() => {
                        const body = [
                          encodeURIComponent('[ HELP ]'),
                          encodeURIComponent('Symbol Wallet の使い方が分かりません'),
                          encodeURIComponent('#Symbol #Tomatina #Potetina'),
                        ].join('%0A%0A');
                        window.open(`https://twitter.com/intent/tweet?text=${body}`, '_blank');
                      }}
                    >
                      投稿する
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary='イベントについて相談したい'
                    secondary='相談したい場合は、discord へお越し頂き、general チャンネルでご相談ください'
                    style={{ marginBottom: '2rem' }}
                  />
                  <ListItemSecondaryAction style={{ position: 'initial' }}>
                    <LinkButton
                      style={{ maxWidth: '300px', width: '100%' }}
                      href='https://discord.gg/TT2tvxFfN4'
                      variant='outlined'
                      isNewTab
                    >
                      discord へ参加する
                    </LinkButton>
                  </ListItemSecondaryAction>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemText
                    primary='参加するにあたって注意事項はありますか？'
                    secondary='差別、誹謗中傷、不当、不法な勧誘、他校的良俗に反する投稿や、Symbol/NEM、または他の暗号資産やNFT、Defi等、他投資商品の購入斡旋や販売、買い、売り煽りは禁止です。また、Wallet にはご自身の資産が入っている場合もあります。Wallet を公開されたゲームやツールを接続する際には細心の注意を払いましょう。期間中の如何なる損失も保証されません。'
                    style={{ marginBottom: '2rem' }}
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </InViewAnimation>
        <div style={{ height: '5svh' }} />
        <InViewAnimation direction='right' threshold={0.2} style={{ marginBottom: '10svh' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            ゲーム楽しもう
          </Typography>
        </InViewAnimation>
        <Typography variant='body1' style={{ marginBottom: '1rem' }}>
          現在公開されているゲームを掲載しております。プレイ方法、ルールなどは各ゲームのページをご覧ください。
        </Typography>
        <Grid container spacing={3} alignItems={'center'}>
          {[
            {
              title: 'pasomi🍅tomato',
              description: 'トマティーナで使えるトマトを貰えます',
              date: '2023/07/30',
              locale: 'ja',
              image: PasomiTomatoImage.src,
              link: 'http://pasomi.net:100/',
            },
            {
              title: 'Tomatina Monitor',
              description: 'トマティーナの状況をリアルタイムで確認できます',
              date: '2023/07/30',
              locale: 'ja',
              image: TomatinaGraphImage.src,
              link: 'https://ishidad2.github.io/tomatina/',
            },
            {
              title: 'MOSAIC CENTER',
              description: 'Symbol 上のあらゆる MOSAIC を確認できます',
              date: '2023/07/30',
              locale: 'ja',
              image: TomatinaMosaicCenterImage.src,
              link: 'https://mosaic-center.tk/',
            },
            {
              title: 'トマティーナ広場',
              description: '（注意：本ゲームはメインネット版です）2022年の名作。トマトを投げて投げて投げまくるゲーム',
              date: '2023/07/30',
              locale: 'ja',
              image: TomatinaHirobaImage.src,
              link: 'http://feiton.xsrv.jp/Tomato/',
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <InViewAnimation direction='up' threshold={0.2}>
                <MediaCard
                  title={item.title}
                  date={item.date}
                  description={item.description}
                  locale={item.locale}
                  image={item.image}
                  link={item.link}
                  tweetLink={item.link}
                />
              </InViewAnimation>
            </Grid>
          ))}
        </Grid>
        <div style={{ height: '5svh' }} />
        <InViewAnimation style={{ width: '100%' }}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            Main Event
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '1rem' }}>
            元のイベント、 Symbol Tomatina へアクセスする際には以下からアクセスしてください。
          </Typography>
          <Stack alignItems='center' justifyContent='center' style={{ height: '45vh' }}>
            <ButtonBase
              LinkComponent={Link}
              href='/events/tomatina'
              style={{ width: '90%', height: '40vh', transition: 'all 0.5s ease' }}
              onMouseOver={(e) => {
                e.currentTarget.style.width = '100%';
                e.currentTarget.style.height = '45vh';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.width = '90%';
                e.currentTarget.style.height = '40vh';
              }}
            >
              <Image
                fill
                priority={false}
                alt={'side event tomatina vs potetina'}
                src={SymbolTomatinaTwitterCard.src}
                sizes='100%'
                style={{ objectFit: 'cover', borderRadius: '10px' }}
              />
            </ButtonBase>
          </Stack>
        </InViewAnimation>
      </Container>
      <Card style={{ marginTop: '10svh', width: '100%', borderRadius: 0, paddingTop: '5svh', paddingBottom: '5svh' }}>
        <Container maxWidth={'lg'}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            開催概要
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '1rem' }}>
            2023年度 Potetina の開催概要を掲載します。（準備中）
          </Typography>
          <Grid container alignItems={'center'}>
            <Grid item xs={12} md={6}>
              <List style={{ flexGrow: 1 }} disablePadding>
                <ListItem>
                  <ListItemText primary='開催日時' secondary='毎年８月最終水曜日' />
                </ListItem>
                <ListItem>
                  <ListItemText primary='開催場所' secondary='Twitter等' />
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <List style={{ flexGrow: 1 }} disablePadding>
                <ListItem>
                  <ListItemText
                    primary='問い合わせ'
                    secondary={
                      <Link href={'https://discord.gg/TT2tvxFfN4'} style={{ color: 'white' }}>
                        Symbol/NEM Marketing
                      </Link>
                    }
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Card>
      <section style={{ marginTop: '100px' }}>
        <Container maxWidth={'lg'}>
          <Footer />
        </Container>
      </section>
    </>
  );
};

const getStaticProps: GetStaticProps<Props> = async ({ locale, defaultLocale }) => {
  return {
    props: {
      i18n: langSelecter(locale).index,
    },
  };
};

export { getStaticProps };
export default PotetinaEvent;
