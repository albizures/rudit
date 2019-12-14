import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вытаращить: PerfectVerb = {
  name: Word('вытаращить', 1),
  singular1stPerson: Word('вытаращу', 1),
  singular2ndPerson: Word('вытаращишь', 1),
  singular3rdPerson: Word('вытаращит', 1),
  plural1stPerson: Word('вытаращим', 1),
  plural2ndPerson: Word('вытаращите', 1),
  plural3rdPerson: Word('вытаращат', 1),
  masculinePast: Word('вытаращил', 1),
  femininePast: Word('вытаращила', 1),
  neuterPast: Word('вытаращило', 1),
  pluralPast: Word('вытаращили', 1),
  imperativeInformal: Word('вытаращи//вы'таращь', 1),
  imperativeFormal: Word('вытаращьте', 1),
  imperfect: [],
};

perfectVerbs.set(вытаращить.name.text, вытаращить);

export { вытаращить };