import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const медлить: PerfectVerb = {
  name: Word('медлить', 1),
  singular1stPerson: Word('медлю', 1),
  singular2ndPerson: Word('медлишь', 1),
  singular3rdPerson: Word('медлит', 1),
  plural1stPerson: Word('медлим', 1),
  plural2ndPerson: Word('медлите', 1),
  plural3rdPerson: Word('медлят', 1),
  masculinePast: Word('медлил', 1),
  femininePast: Word('медлила', 1),
  neuterPast: Word('медлило', 1),
  pluralPast: Word('медлили', 1),
  imperativeInformal: Word('медли', 1),
  imperativeFormal: Word('медлите', 1),
  imperfect: ['помедлить'],
};

perfectVerbs.set(медлить.name.text, медлить);

export { медлить };