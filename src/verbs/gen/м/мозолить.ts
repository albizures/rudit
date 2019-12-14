import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const мозолить: PerfectVerb = {
  name: Word('мозолить', 3),
  singular1stPerson: Word('мозолю', 3),
  singular2ndPerson: Word('мозолишь', 3),
  singular3rdPerson: Word('мозолит', 3),
  plural1stPerson: Word('мозолим', 3),
  plural2ndPerson: Word('мозолите', 3),
  plural3rdPerson: Word('мозолят', 3),
  masculinePast: Word('мозолил', 3),
  femininePast: Word('мозолила', 3),
  neuterPast: Word('мозолило', 3),
  pluralPast: Word('мозолили', 3),
  imperativeInformal: Word('мозоль', 3),
  imperativeFormal: Word('мозольте', 3),
  imperfect: [],
};

perfectVerbs.set(мозолить.name.text, мозолить);

export { мозолить };