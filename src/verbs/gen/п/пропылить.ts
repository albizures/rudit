import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропылить: PerfectVerb = {
  name: Word('пропылить', 6),
  singular1stPerson: Word('пропылю', 6),
  singular2ndPerson: Word('пропылишь', 6),
  singular3rdPerson: Word('пропылит', 6),
  plural1stPerson: Word('пропылим', 6),
  plural2ndPerson: Word('пропылите', 6),
  plural3rdPerson: Word('пропылят', 6),
  masculinePast: Word('пропылил', 6),
  femininePast: Word('пропылила', 6),
  neuterPast: Word('пропылило', 6),
  pluralPast: Word('пропылили', 6),
  imperativeInformal: Word('пропыли', 6),
  imperativeFormal: Word('пропылите', 6),
  imperfect: [],
};

perfectVerbs.set(пропылить.name.text, пропылить);

export { пропылить };