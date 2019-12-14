import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приедаться: PerfectVerb = {
  name: Word('приедаться', 5),
  singular1stPerson: Word('приедаюсь', 5),
  singular2ndPerson: Word('приедаешься', 5),
  singular3rdPerson: Word('приедается', 5),
  plural1stPerson: Word('приедаемся', 5),
  plural2ndPerson: Word('приедаетесь', 5),
  plural3rdPerson: Word('приедаются', 5),
  masculinePast: Word('приедался', 5),
  femininePast: Word('приедалась', 5),
  neuterPast: Word('приедалось', 5),
  pluralPast: Word('приедались', 5),
  imperativeInformal: Word('приедайся', 5),
  imperativeFormal: Word('приедайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(приедаться.name.text, приедаться);

export { приедаться };