import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const порыться: PerfectVerb = {
  name: Word('порыться', 3),
  singular1stPerson: Word('пороюсь', 3),
  singular2ndPerson: Word('пороешься', 3),
  singular3rdPerson: Word('пороется', 3),
  plural1stPerson: Word('пороемся', 3),
  plural2ndPerson: Word('пороетесь', 3),
  plural3rdPerson: Word('пороются', 3),
  masculinePast: Word('порылся', 3),
  femininePast: Word('порылась', 3),
  neuterPast: Word('порылось', 3),
  pluralPast: Word('порылись', 3),
  imperativeInformal: Word('поройся', 3),
  imperativeFormal: Word('поройтесь', 3),
  imperfect: [],
};

perfectVerbs.set(порыться.name.text, порыться);

export { порыться };