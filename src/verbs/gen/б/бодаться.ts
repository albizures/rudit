import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бодаться: PerfectVerb = {
  name: Word('бодаться', 3),
  singular1stPerson: Word('бодаюсь', 3),
  singular2ndPerson: Word('бодаешься', 3),
  singular3rdPerson: Word('бодается', 3),
  plural1stPerson: Word('бодаемся', 3),
  plural2ndPerson: Word('бодаетесь', 3),
  plural3rdPerson: Word('бодаются', 3),
  masculinePast: Word('бодался', 3),
  femininePast: Word('бодалась', 3),
  neuterPast: Word('бодалось', 3),
  pluralPast: Word('бодались', 3),
  imperativeInformal: Word('бодайся', 3),
  imperativeFormal: Word('бодайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(бодаться.name.text, бодаться);

export { бодаться };