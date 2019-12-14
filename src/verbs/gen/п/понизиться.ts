import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понизиться: PerfectVerb = {
  name: Word('понизиться', 3),
  singular1stPerson: Word('понижусь', 3),
  singular2ndPerson: Word('понизишься', 3),
  singular3rdPerson: Word('понизится', 3),
  plural1stPerson: Word('понизимся', 3),
  plural2ndPerson: Word('понизитесь', 3),
  plural3rdPerson: Word('понизятся', 3),
  masculinePast: Word('понизился', 3),
  femininePast: Word('понизилась', 3),
  neuterPast: Word('понизилось', 3),
  pluralPast: Word('понизились', 3),
  imperativeInformal: Word('понизься', 3),
  imperativeFormal: Word('понизьтесь', 3),
  imperfect: [],
};

perfectVerbs.set(понизиться.name.text, понизиться);

export { понизиться };