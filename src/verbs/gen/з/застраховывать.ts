import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застраховывать: PerfectVerb = {
  name: Word('застраховывать', 7),
  singular1stPerson: Word('застраховываю', 7),
  singular2ndPerson: Word('застраховываешь', 7),
  singular3rdPerson: Word('застраховывает', 7),
  plural1stPerson: Word('застраховываем', 7),
  plural2ndPerson: Word('застраховываете', 7),
  plural3rdPerson: Word('застраховывают', 7),
  masculinePast: Word('застраховывал', 7),
  femininePast: Word('застраховывала', 7),
  neuterPast: Word('застраховывало', 7),
  pluralPast: Word('застраховывали', 7),
  imperativeInformal: Word('застраховывай', 7),
  imperativeFormal: Word('застраховывайте', 7),
  imperfect: [],
};

perfectVerbs.set(застраховывать.name.text, застраховывать);

export { застраховывать };