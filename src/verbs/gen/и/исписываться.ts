import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исписываться: PerfectVerb = {
  name: Word('исписываться', 3),
  singular1stPerson: Word('исписываюсь', 3),
  singular2ndPerson: Word('исписываешься', 3),
  singular3rdPerson: Word('исписывается', 3),
  plural1stPerson: Word('исписываемся', 3),
  plural2ndPerson: Word('исписываетесь', 3),
  plural3rdPerson: Word('исписываются', 3),
  masculinePast: Word('исписывался', 3),
  femininePast: Word('исписывалась', 3),
  neuterPast: Word('исписывалось', 3),
  pluralPast: Word('исписывались', 3),
  imperativeInformal: Word('исписывайся', 3),
  imperativeFormal: Word('исписывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(исписываться.name.text, исписываться);

export { исписываться };