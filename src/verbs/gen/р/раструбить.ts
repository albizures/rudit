import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раструбить: PerfectVerb = {
  name: Word('раструбить', 7),
  singular1stPerson: Word('раструблю', 8),
  singular2ndPerson: Word('раструбишь', 7),
  singular3rdPerson: Word('раструбит', 7),
  plural1stPerson: Word('раструбим', 7),
  plural2ndPerson: Word('раструбите', 7),
  plural3rdPerson: Word('раструбят', 7),
  masculinePast: Word('раструбил', 7),
  femininePast: Word('раструбила', 7),
  neuterPast: Word('раструбило', 7),
  pluralPast: Word('раструбили', 7),
  imperativeInformal: Word('раструби', 7),
  imperativeFormal: Word('раструбите', 7),
  imperfect: [],
};

perfectVerbs.set(раструбить.name.text, раструбить);

export { раструбить };