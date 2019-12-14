import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const толочь: PerfectVerb = {
  name: Word('толочь', 3),
  singular1stPerson: Word('толку', 4),
  singular2ndPerson: Word('толчёшь', 1),
  singular3rdPerson: Word('толчёт', 1),
  plural1stPerson: Word('толчём', 1),
  plural2ndPerson: Word('толчёте', 6),
  plural3rdPerson: Word('толкут', 4),
  masculinePast: Word('толок', 3),
  femininePast: Word('толкла', 5),
  neuterPast: Word('толкло', 5),
  pluralPast: Word('толкли', 5),
  imperativeInformal: Word('толки', 4),
  imperativeFormal: Word('толките', 4),
  imperfect: ['растолочь','истолочь'],
};

perfectVerbs.set(толочь.name.text, толочь);

export { толочь };