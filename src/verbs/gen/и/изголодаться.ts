import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изголодаться: PerfectVerb = {
  name: Word('изголодаться', 7),
  singular1stPerson: Word('изголодаюсь', 7),
  singular2ndPerson: Word('изголодаешься', 7),
  singular3rdPerson: Word('изголодается', 7),
  plural1stPerson: Word('изголодаемся', 7),
  plural2ndPerson: Word('изголодаетесь', 7),
  plural3rdPerson: Word('изголодаются', 7),
  masculinePast: Word('изголодался', 7),
  femininePast: Word('изголодалась', 7),
  neuterPast: Word('изголодалось', 7),
  pluralPast: Word('изголодались', 7),
  imperativeInformal: Word('изголодайся', 7),
  imperativeFormal: Word('изголодайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(изголодаться.name.text, изголодаться);

export { изголодаться };