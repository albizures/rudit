import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повеселеть: PerfectVerb = {
  name: Word('повеселеть', 7),
  singular1stPerson: Word('повеселею', 7),
  singular2ndPerson: Word('повеселеешь', 7),
  singular3rdPerson: Word('повеселеет', 7),
  plural1stPerson: Word('повеселеем', 7),
  plural2ndPerson: Word('повеселеете', 7),
  plural3rdPerson: Word('повеселеют', 7),
  masculinePast: Word('повеселел', 7),
  femininePast: Word('повеселела', 7),
  neuterPast: Word('повеселело', 7),
  pluralPast: Word('повеселели', 7),
  imperativeInformal: Word('повеселей', 7),
  imperativeFormal: Word('повеселейте', 7),
  imperfect: [],
};

perfectVerbs.set(повеселеть.name.text, повеселеть);

export { повеселеть };