import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const троить: PerfectVerb = {
  name: Word('троить', 3),
  singular1stPerson: Word('трою', 3),
  singular2ndPerson: Word('троишь', 3),
  singular3rdPerson: Word('троит', 3),
  plural1stPerson: Word('троим', 3),
  plural2ndPerson: Word('троите', 3),
  plural3rdPerson: Word('троят', 3),
  masculinePast: Word('троил', 3),
  femininePast: Word('троила', 3),
  neuterPast: Word('троило', 3),
  pluralPast: Word('троили', 3),
  imperativeInformal: Word('трои', 3),
  imperativeFormal: Word('троите', 3),
  imperfect: [],
};

perfectVerbs.set(троить.name.text, троить);

export { троить };