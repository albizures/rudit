import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const защемить: PerfectVerb = {
  name: Word('защемить', 5),
  singular1stPerson: Word('защемлю', 6),
  singular2ndPerson: Word('защемишь', 5),
  singular3rdPerson: Word('защемит', 5),
  plural1stPerson: Word('защемим', 5),
  plural2ndPerson: Word('защемите', 5),
  plural3rdPerson: Word('защемят', 5),
  masculinePast: Word('защемил', 5),
  femininePast: Word('защемила', 5),
  neuterPast: Word('защемило', 5),
  pluralPast: Word('защемили', 5),
  imperativeInformal: Word('защеми', 5),
  imperativeFormal: Word('защемите', 5),
  imperfect: [],
};

perfectVerbs.set(защемить.name.text, защемить);

export { защемить };