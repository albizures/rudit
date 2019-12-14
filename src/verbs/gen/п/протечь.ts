import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протечь: PerfectVerb = {
  name: Word('протечь', 4),
  singular1stPerson: Word('протеку', 6),
  singular2ndPerson: Word('протечёшь', 6),
  singular3rdPerson: Word('протечёт', 6),
  plural1stPerson: Word('протечём', 6),
  plural2ndPerson: Word('протечёте', 6),
  plural3rdPerson: Word('протекут', 6),
  masculinePast: Word('протек', 4),
  femininePast: Word('протекла', 7),
  neuterPast: Word('протекло', 7),
  pluralPast: Word('протекли', 7),
  imperativeInformal: Word('протеки', 6),
  imperativeFormal: Word('протеките', 6),
  imperfect: [],
};

perfectVerbs.set(протечь.name.text, протечь);

export { протечь };