import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озаглавить: PerfectVerb = {
  name: Word('озаглавить', 5),
  singular1stPerson: Word('озаглавлю', 5),
  singular2ndPerson: Word('озаглавишь', 5),
  singular3rdPerson: Word('озаглавит', 5),
  plural1stPerson: Word('озаглавим', 5),
  plural2ndPerson: Word('озаглавите', 5),
  plural3rdPerson: Word('озаглавят', 5),
  masculinePast: Word('озаглавил', 5),
  femininePast: Word('озаглавила', 5),
  neuterPast: Word('озаглавило', 5),
  pluralPast: Word('озаглавили', 5),
  imperativeInformal: Word('озаглавь', 5),
  imperativeFormal: Word('озаглавьте', 5),
  imperfect: [],
};

perfectVerbs.set(озаглавить.name.text, озаглавить);

export { озаглавить };