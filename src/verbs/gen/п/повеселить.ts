import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const повеселить: PerfectVerb = {
  name: Word('повеселить', 7),
  singular1stPerson: Word('повеселю', 7),
  singular2ndPerson: Word('повеселишь', 7),
  singular3rdPerson: Word('повеселит', 7),
  plural1stPerson: Word('повеселим', 7),
  plural2ndPerson: Word('повеселите', 7),
  plural3rdPerson: Word('повеселят', 7),
  masculinePast: Word('повеселил', 7),
  femininePast: Word('повеселила', 7),
  neuterPast: Word('повеселило', 7),
  pluralPast: Word('повеселили', 7),
  imperativeInformal: Word('повесели', 7),
  imperativeFormal: Word('повеселите', 7),
  imperfect: [],
};

perfectVerbs.set(повеселить.name.text, повеселить);

export { повеселить };