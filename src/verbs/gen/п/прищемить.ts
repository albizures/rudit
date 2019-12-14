import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищемить: PerfectVerb = {
  name: Word('прищемить', 6),
  singular1stPerson: Word('прищемлю', 7),
  singular2ndPerson: Word('прищемишь', 6),
  singular3rdPerson: Word('прищемит', 6),
  plural1stPerson: Word('прищемим', 6),
  plural2ndPerson: Word('прищемите', 6),
  plural3rdPerson: Word('прищемят', 6),
  masculinePast: Word('прищемил', 6),
  femininePast: Word('прищемила', 6),
  neuterPast: Word('прищемило', 6),
  pluralPast: Word('прищемили', 6),
  imperativeInformal: Word('прищеми', 6),
  imperativeFormal: Word('прищемите', 6),
  imperfect: [],
};

perfectVerbs.set(прищемить.name.text, прищемить);

export { прищемить };