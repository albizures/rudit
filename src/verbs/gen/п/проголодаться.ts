import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проголодаться: PerfectVerb = {
  name: Word('проголодаться', 8),
  singular1stPerson: Word('проголодаюсь', 8),
  singular2ndPerson: Word('проголодаешься', 8),
  singular3rdPerson: Word('проголодается', 8),
  plural1stPerson: Word('проголодаемся', 8),
  plural2ndPerson: Word('проголодаетесь', 8),
  plural3rdPerson: Word('проголодаются', 8),
  masculinePast: Word('проголодался', 8),
  femininePast: Word('проголодалась', 8),
  neuterPast: Word('проголодалось', 8),
  pluralPast: Word('проголодались', 8),
  imperativeInformal: Word('проголодайся', 8),
  imperativeFormal: Word('проголодайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(проголодаться.name.text, проголодаться);

export { проголодаться };