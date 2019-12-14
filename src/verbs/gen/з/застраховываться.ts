import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застраховываться: PerfectVerb = {
  name: Word('застраховываться', 7),
  singular1stPerson: Word('застраховываюсь', 7),
  singular2ndPerson: Word('застраховываешься', 7),
  singular3rdPerson: Word('застраховывается', 7),
  plural1stPerson: Word('застраховываемся', 7),
  plural2ndPerson: Word('застраховываетесь', 7),
  plural3rdPerson: Word('застраховываются', 7),
  masculinePast: Word('застраховывался', 7),
  femininePast: Word('застраховывалась', 7),
  neuterPast: Word('застраховывалось', 7),
  pluralPast: Word('застраховывались', 7),
  imperativeInformal: Word('застраховывайся', 7),
  imperativeFormal: Word('застраховывайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(застраховываться.name.text, застраховываться);

export { застраховываться };