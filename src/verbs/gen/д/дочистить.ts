import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дочистить: PerfectVerb = {
  name: Word('дочистить', 3),
  singular1stPerson: Word('дочищу', 3),
  singular2ndPerson: Word('дочистишь', 3),
  singular3rdPerson: Word('дочистит', 3),
  plural1stPerson: Word('дочистим', 3),
  plural2ndPerson: Word('дочистите', 3),
  plural3rdPerson: Word('дочистят', 3),
  masculinePast: Word('дочистил', 3),
  femininePast: Word('дочистила', 3),
  neuterPast: Word('дочистило', 3),
  pluralPast: Word('дочистили', 3),
  imperativeInformal: Word('дочисти//дочи'сть', 3),
  imperativeFormal: Word('дочи'стите//до'чи'стьте', 1),
  imperfect: [],
};

perfectVerbs.set(дочистить.name.text, дочистить);

export { дочистить };