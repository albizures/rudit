import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изменить: PerfectVerb = {
  name: Word('изменить', 5),
  singular1stPerson: Word('изменю', 5),
  singular2ndPerson: Word('изменишь', 3),
  singular3rdPerson: Word('изменит', 3),
  plural1stPerson: Word('изменим', 3),
  plural2ndPerson: Word('измените', 3),
  plural3rdPerson: Word('изменят', 3),
  masculinePast: Word('изменил', 5),
  femininePast: Word('изменила', 5),
  neuterPast: Word('изменило', 5),
  pluralPast: Word('изменили', 5),
  imperativeInformal: Word('измени', 5),
  imperativeFormal: Word('измените', 5),
  imperfect: ['изменять'],
};

perfectVerbs.set(изменить.name.text, изменить);

export { изменить };