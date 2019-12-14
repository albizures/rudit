import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const протирать: PerfectVerb = {
  name: Word('протирать', 6),
  singular1stPerson: Word('протираю', 6),
  singular2ndPerson: Word('протираешь', 6),
  singular3rdPerson: Word('протирает', 6),
  plural1stPerson: Word('протираем', 6),
  plural2ndPerson: Word('протираете', 6),
  plural3rdPerson: Word('протирают', 6),
  masculinePast: Word('протирал', 6),
  femininePast: Word('протирала', 6),
  neuterPast: Word('протирало', 6),
  pluralPast: Word('протирали', 6),
  imperativeInformal: Word('протирай', 6),
  imperativeFormal: Word('протирайте', 6),
  imperfect: [],
};

perfectVerbs.set(протирать.name.text, протирать);

export { протирать };