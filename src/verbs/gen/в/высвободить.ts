import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высвободить: PerfectVerb = {
  name: Word('высвободить', 1),
  singular1stPerson: Word('высвобожу', 1),
  singular2ndPerson: Word('высвободишь', 1),
  singular3rdPerson: Word('высвободит', 1),
  plural1stPerson: Word('высвободим', 1),
  plural2ndPerson: Word('высвободите', 1),
  plural3rdPerson: Word('высвободят', 1),
  masculinePast: Word('высвободил', 1),
  femininePast: Word('высвободила', 1),
  neuterPast: Word('высвободило', 1),
  pluralPast: Word('высвободили', 1),
  imperativeInformal: Word('высвободи', 1),
  imperativeFormal: Word('высвободите', 1),
  imperfect: [],
};

perfectVerbs.set(высвободить.name.text, высвободить);

export { высвободить };