import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const салить: PerfectVerb = {
  name: Word('салить', 1),
  singular1stPerson: Word('салю', 1),
  singular2ndPerson: Word('салишь', 1),
  singular3rdPerson: Word('салит', 1),
  plural1stPerson: Word('салим', 1),
  plural2ndPerson: Word('салите', 1),
  plural3rdPerson: Word('салят', 1),
  masculinePast: Word('салил', 1),
  femininePast: Word('салила', 1),
  neuterPast: Word('салило', 1),
  pluralPast: Word('салили', 1),
  imperativeInformal: Word('саль', 1),
  imperativeFormal: Word('сальте', 1),
  imperfect: [],
};

perfectVerbs.set(салить.name.text, салить);

export { салить };