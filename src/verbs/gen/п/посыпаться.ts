import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посыпаться: PerfectVerb = {
  name: Word('посыпаться', 5),
  singular1stPerson: Word('посыпаюсь', 5),
  singular2ndPerson: Word('посыпаешься', 5),
  singular3rdPerson: Word('посыпается', 5),
  plural1stPerson: Word('посыпаемся', 5),
  plural2ndPerson: Word('посыпаетесь', 5),
  plural3rdPerson: Word('посыпаются', 5),
  masculinePast: Word('посыпался', 5),
  femininePast: Word('посыпалась', 5),
  neuterPast: Word('посыпалось', 5),
  pluralPast: Word('посыпались', 5),
  imperativeInformal: Word('посыпайся', 5),
  imperativeFormal: Word('посыпайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(посыпаться.name.text, посыпаться);

export { посыпаться };