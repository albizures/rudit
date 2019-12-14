import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заморозить: PerfectVerb = {
  name: Word('заморозить', 5),
  singular1stPerson: Word('заморожу', 5),
  singular2ndPerson: Word('заморозишь', 5),
  singular3rdPerson: Word('заморозит', 5),
  plural1stPerson: Word('заморозим', 5),
  plural2ndPerson: Word('заморозите', 5),
  plural3rdPerson: Word('заморозят', 5),
  masculinePast: Word('заморозил', 5),
  femininePast: Word('заморозила', 5),
  neuterPast: Word('заморозило', 5),
  pluralPast: Word('заморозили', 5),
  imperativeInformal: Word('заморозь', 5),
  imperativeFormal: Word('заморозьте', 5),
  imperfect: ['замораживать','морозить'],
};

perfectVerbs.set(заморозить.name.text, заморозить);

export { заморозить };