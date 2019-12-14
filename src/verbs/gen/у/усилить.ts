import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const усилить: PerfectVerb = {
  name: Word('усилить', 2),
  singular1stPerson: Word('усилю', 2),
  singular2ndPerson: Word('усилишь', 2),
  singular3rdPerson: Word('усилит', 2),
  plural1stPerson: Word('усилим', 2),
  plural2ndPerson: Word('усилите', 2),
  plural3rdPerson: Word('усилят', 2),
  masculinePast: Word('усилил', 2),
  femininePast: Word('усилила', 2),
  neuterPast: Word('усилило', 2),
  pluralPast: Word('усилили', 2),
  imperativeInformal: Word('усиль', 2),
  imperativeFormal: Word('усильте', 2),
  imperfect: [],
};

perfectVerbs.set(усилить.name.text, усилить);

export { усилить };