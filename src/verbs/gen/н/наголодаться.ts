import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наголодаться: PerfectVerb = {
  name: Word('наголодаться', 7),
  singular1stPerson: Word('наголодаюсь', 7),
  singular2ndPerson: Word('наголодаешься', 7),
  singular3rdPerson: Word('наголодается', 7),
  plural1stPerson: Word('наголодаемся', 7),
  plural2ndPerson: Word('наголодаетесь', 7),
  plural3rdPerson: Word('наголодаются', 7),
  masculinePast: Word('наголодался', 7),
  femininePast: Word('наголодалась', 7),
  neuterPast: Word('наголодалось', 7),
  pluralPast: Word('наголодались', 7),
  imperativeInformal: Word('наголодайся', 7),
  imperativeFormal: Word('наголодайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(наголодаться.name.text, наголодаться);

export { наголодаться };