import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заселить: PerfectVerb = {
  name: Word('заселить', 5),
  singular1stPerson: Word('заселю', 5),
  singular2ndPerson: Word('заселишь', 5),
  singular3rdPerson: Word('заселит', 5),
  plural1stPerson: Word('заселим', 5),
  plural2ndPerson: Word('заселите', 5),
  plural3rdPerson: Word('заселят', 5),
  masculinePast: Word('заселил', 5),
  femininePast: Word('заселила', 5),
  neuterPast: Word('заселило', 5),
  pluralPast: Word('заселили', 5),
  imperativeInformal: Word('засели', 5),
  imperativeFormal: Word('заселите', 5),
  imperfect: [],
};

perfectVerbs.set(заселить.name.text, заселить);

export { заселить };