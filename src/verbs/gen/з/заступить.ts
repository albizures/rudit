import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заступить: PerfectVerb = {
  name: Word('заступить', 6),
  singular1stPerson: Word('заступлю', 7),
  singular2ndPerson: Word('заступишь', 4),
  singular3rdPerson: Word('заступит', 4),
  plural1stPerson: Word('заступим', 4),
  plural2ndPerson: Word('заступите', 4),
  plural3rdPerson: Word('заступят', 4),
  masculinePast: Word('заступил', 6),
  femininePast: Word('заступила', 6),
  neuterPast: Word('заступило', 6),
  pluralPast: Word('заступили', 6),
  imperativeInformal: Word('заступи', 6),
  imperativeFormal: Word('заступите', 6),
  imperfect: [],
};

perfectVerbs.set(заступить.name.text, заступить);

export { заступить };