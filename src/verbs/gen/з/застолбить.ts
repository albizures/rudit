import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застолбить: PerfectVerb = {
  name: Word('застолбить', 7),
  singular1stPerson: Word('застолблю', 8),
  singular2ndPerson: Word('застолбишь', 7),
  singular3rdPerson: Word('застолбит', 7),
  plural1stPerson: Word('застолбим', 7),
  plural2ndPerson: Word('застолбите', 7),
  plural3rdPerson: Word('застолбят', 7),
  masculinePast: Word('застолбил', 7),
  femininePast: Word('застолбила', 7),
  neuterPast: Word('застолбило', 7),
  pluralPast: Word('застолбили', 7),
  imperativeInformal: Word('застолби', 7),
  imperativeFormal: Word('застолбите', 7),
  imperfect: [],
};

perfectVerbs.set(застолбить.name.text, застолбить);

export { застолбить };