import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застраиваться: PerfectVerb = {
  name: Word('застраиваться', 5),
  singular1stPerson: Word('застраиваюсь', 5),
  singular2ndPerson: Word('застраиваешься', 5),
  singular3rdPerson: Word('застраивается', 5),
  plural1stPerson: Word('застраиваемся', 5),
  plural2ndPerson: Word('застраиваетесь', 5),
  plural3rdPerson: Word('застраиваются', 5),
  masculinePast: Word('застраивался', 5),
  femininePast: Word('застраивалась', 5),
  neuterPast: Word('застраивалось', 5),
  pluralPast: Word('застраивались', 5),
  imperativeInformal: Word('застраивайся', 5),
  imperativeFormal: Word('застраивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(застраиваться.name.text, застраиваться);

export { застраиваться };