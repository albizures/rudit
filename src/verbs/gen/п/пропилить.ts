import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пропилить: PerfectVerb = {
  name: Word('пропилить', 6),
  singular1stPerson: Word('пропилю', 6),
  singular2ndPerson: Word('пропилишь', 4),
  singular3rdPerson: Word('пропилит', 4),
  plural1stPerson: Word('пропилим', 4),
  plural2ndPerson: Word('пропилите', 4),
  plural3rdPerson: Word('пропилят', 4),
  masculinePast: Word('пропилил', 6),
  femininePast: Word('пропилила', 6),
  neuterPast: Word('пропилило', 6),
  pluralPast: Word('пропилили', 6),
  imperativeInformal: Word('пропили', 6),
  imperativeFormal: Word('пропилите', 6),
  imperfect: [],
};

perfectVerbs.set(пропилить.name.text, пропилить);

export { пропилить };