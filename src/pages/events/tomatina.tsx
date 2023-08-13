import TomatinaMosaicCenterImage from '@/assets/events/tomatina/mosaic-center.webp';
import PasomiTomatoImage from '@/assets/events/tomatina/pasomi-tomato.webp';
import TomatinaTwitterHeader from '@/assets/events/tomatina/symbol-tomatina-header.png';
import TomatinaGraphImage from '@/assets/events/tomatina/tomatina-graph.webp';
import TomatinaHirobaImage from '@/assets/events/tomatina/tomatina-hiroba.webp';
import TomatoFaceImage from '@/assets/events/tomatina/tomato-face.png';
import ThrowTomatoImage from '@/assets/events/tomatina/tomato-icon.webp';
import TomatoVsPoteto from '@/assets/events/tomatina/tomato-vs-poteto.webp';
import TomatoImage from '@/assets/events/tomatina/tomato.png';
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
  animation: '3s linear 10s infinite alternate fancy_tomato',
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
      <Image style={{ zIndex: -1 }} src={ThrowTomatoImage.src} alt='throw tomato' width={200} height={200} />
    </FancyTomato>
  );
}

const TomatinaEvent: NextPage<Props> = ({ i18n }) => {
  return (
    <>
      <Head>
        <title>{`${i18n.meta_page_title} | Tomatina`}</title>
        <meta name='description' content={'Symbol トマティーナのイベントページです'} />
        <meta name='twitter:title' content={'Symbol トマティーナ'} />
        <meta name='twitter:description' content={'Symbol トマティーナのイベントページです'} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:image' content={`${process.env.NEXT_PUBLIC_HOSTING_URL}${TomatinaTwitterHeader.src}`} />
      </Head>
      <Header />
      <Toolbar style={{ marginTop: '20px' }} />
      <div style={{ position: 'fixed' }}>
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
          backgroundImage: `url(${TomatoImage.src})`,
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
            Symbol Tomatina
          </Typography>
          <Typography variant='h5' fontWeight='bold' textAlign='center'>
            熱したデジタルトマトをぶつけ合おう
          </Typography>
        </div>
        <InViewAnimation direction='up' threshold={0.2}>
          <Typography variant='h4' fontWeight={'bold'} gutterBottom>
            デジタルトマトをぶつけまくる
          </Typography>

          <Grid container spacing={3} alignItems={'center'} style={{ minHeight: '50svh' }}>
            <Grid item xs={12} md={7}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                このイベントでは期間限定でトマトを模したデジタルトークンが発行され、無料にて配布されます。配布されたデジタルトマトトークンを使って見知らぬ誰かにブロックチェーンのトランザクションとして投げつけたり、トマトを投げつけるようなゲームをプレイする事ができます。
              </Typography>
              <LinkButton
                href='https://docs.symbol.dev/ja/concepts/mosaic.html'
                ariaLabel='mosaic link'
                isNewTab
                variant='outlined'
                sx={{ width: { xs: '100%', sm: '100%', md: '300px' } }}
              >
                デジタルトークンについて知る
              </LinkButton>
            </Grid>
            <Grid item xs={12} md={5}>
              <div style={{ width: '100%', textAlign: 'center', marginTop: '5svh', marginBottom: '5svh' }}>
                <Image src={TomatoFaceImage} height={300} width={300} alt='tomato image' />
              </div>
            </Grid>
          </Grid>
        </InViewAnimation>
        <div style={{ height: '5svh' }} />
        <InViewAnimation direction='up' threshold={0.2}>
          <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} gutterBottom>
            以前の開催の様子
          </Typography>
          <Grid container spacing={3} alignItems={'center'} style={{ minHeight: '50svh' }}>
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
        <InViewAnimation direction='up' threshold={0.2}>
          <Typography variant='h4' fontWeight={'bold'} textAlign={'center'} gutterBottom>
            事前準備
          </Typography>
          <Grid container spacing={3} alignItems={'center'} style={{ minHeight: '50svh' }}>
            <Grid item xs={12} md={6}>
              <Typography variant='body1' style={{ marginBottom: '1rem' }}>
                公開されているゲームは Wallet なしでプレイできるものもありますが、当日慌てない為にも事前に Wallet
                を作成しておきましょう。
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={3}>
                <Button fullWidth LinkComponent={Link} href='https://coin-view.net/symbolwallet-mobile/'>
                  モバイルウォレット-1
                </Button>
                <Button fullWidth LinkComponent={Link} href='https://www.aemalgorithm.io/aem-plus/main'>
                  モバイルウォレット-2
                </Button>
                <Button fullWidth LinkComponent={Link} href='https://docs.symbol.dev/ja/wallets.html#wallet-desktop'>
                  デスクトップウォレット
                </Button>
                <Button
                  fullWidth
                  LinkComponent={Link}
                  href='https://chrome.google.com/webstore/detail/sss-extension/llildiojemakefgnhhkmiiffonembcan?hl=ja'
                >
                  ブラウザ拡張署名ツール
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </InViewAnimation>
        <div style={{ height: '5svh' }} />
        <InViewAnimation direction='right' threshold={0.2}>
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
            Side Event
          </Typography>
          <Typography variant='body1' style={{ marginBottom: '1rem' }}>
            Symbol Tomatina へあの人々が遊びに来る！？ どちらの陣営が多くのトランザクションを発生させるのか...
            勝負だ！！
          </Typography>
          <Stack alignItems='center' justifyContent='center' style={{ height: '60vh' }}>
            <ButtonBase
              LinkComponent={Link}
              href='/events/potetina'
              style={{ width: '90%', height: '55vh', transition: 'all 0.5s ease' }}
              onMouseOver={(e) => {
                e.currentTarget.style.width = '100%';
                e.currentTarget.style.height = '60vh';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.width = '90%';
                e.currentTarget.style.height = '55vh';
              }}
            >
              <Image
                fill
                priority={false}
                sizes='100%'
                alt={'side event tomatina vs potetina'}
                src={TomatoVsPoteto.src}
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
            2023年度 Symbol Tomatina の開催概要を掲載します。（準備中）
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
                <ListItem>
                  <ListItemText primary='Tomato Mosaic ID' secondary='各自自由に発行' />
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
export default TomatinaEvent;
