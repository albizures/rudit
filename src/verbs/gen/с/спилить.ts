import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const спилить: PerfectVerb = {
  name: Word('спилить', 4),
  singular1stPerson: Word('спилю', 4),
  singular2ndPerson: Word('спилишь', 2),
  singular3rdPerson: Word('спилит', 2),
  plural1stPerson: Word('спилим', 2),
  plural2ndPerson: Word('спилите', 2),
  plural3rdPerson: Word('спилят', 2),
  masculinePast: Word('спилил', 4),
  femininePast: Word('спилила', 4),
  neuterPast: Word('спилило', 4),
  pluralPast: Word('спилили', 4),
  imperativeInformal: Word('спили', 4),
  imperativeFormal: Word('спилите', 4),
  imperfect: [],
};

perfectVerbs.set(спилить.name.text, спилить);

export { спилить };