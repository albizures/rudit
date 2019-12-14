import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const басить: PerfectVerb = {
  name: Word('басить', 3),
  singular1stPerson: Word('башу', 3),
  singular2ndPerson: Word('басишь', 3),
  singular3rdPerson: Word('басит', 3),
  plural1stPerson: Word('басим', 3),
  plural2ndPerson: Word('басите', 3),
  plural3rdPerson: Word('басят', 3),
  masculinePast: Word('басил', 3),
  femininePast: Word('басила', 3),
  neuterPast: Word('басило', 3),
  pluralPast: Word('басили', 3),
  imperativeInformal: Word('баси', 3),
  imperativeFormal: Word('басите', 3),
  imperfect: [],
};

perfectVerbs.set(басить.name.text, басить);

export { басить };