import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сохранить: PerfectVerb = {
  name: Word('сохранить', 6),
  singular1stPerson: Word('сохраню', 6),
  singular2ndPerson: Word('сохранишь', 6),
  singular3rdPerson: Word('сохранит', 6),
  plural1stPerson: Word('сохраним', 6),
  plural2ndPerson: Word('сохраните', 6),
  plural3rdPerson: Word('сохранят', 6),
  masculinePast: Word('сохранил', 6),
  femininePast: Word('сохранила', 6),
  neuterPast: Word('сохранило', 6),
  pluralPast: Word('сохранили', 6),
  imperativeInformal: Word('сохрани', 6),
  imperativeFormal: Word('сохраните', 6),
  imperfect: ['сохранять'],
};

perfectVerbs.set(сохранить.name.text, сохранить);

export { сохранить };