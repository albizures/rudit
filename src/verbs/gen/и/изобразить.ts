import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изобразить: PerfectVerb = {
  name: Word('изобразить', 7),
  singular1stPerson: Word('изображу', 7),
  singular2ndPerson: Word('изобразишь', 7),
  singular3rdPerson: Word('изобразит', 7),
  plural1stPerson: Word('изобразим', 7),
  plural2ndPerson: Word('изобразите', 7),
  plural3rdPerson: Word('изобразят', 7),
  masculinePast: Word('изобразил', 7),
  femininePast: Word('изобразила', 7),
  neuterPast: Word('изобразило', 7),
  pluralPast: Word('изобразили', 7),
  imperativeInformal: Word('изобрази', 7),
  imperativeFormal: Word('изобразите', 7),
  imperfect: [],
};

perfectVerbs.set(изобразить.name.text, изобразить);

export { изобразить };