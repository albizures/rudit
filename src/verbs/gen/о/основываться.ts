import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const основываться: PerfectVerb = {
  name: Word('основываться', 3),
  singular1stPerson: Word('основываюсь', 3),
  singular2ndPerson: Word('основываешься', 3),
  singular3rdPerson: Word('основывается', 3),
  plural1stPerson: Word('основываемся', 3),
  plural2ndPerson: Word('основываетесь', 3),
  plural3rdPerson: Word('основываются', 3),
  masculinePast: Word('основывался', 3),
  femininePast: Word('основывалась', 3),
  neuterPast: Word('основывалось', 3),
  pluralPast: Word('основывались', 3),
  imperativeInformal: Word('основывайся', 3),
  imperativeFormal: Word('основывайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(основываться.name.text, основываться);

export { основываться };