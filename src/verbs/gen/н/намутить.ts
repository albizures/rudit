import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намутить: PerfectVerb = {
  name: Word('намутить', 5),
  singular1stPerson: Word('намучу', 5),
  singular2ndPerson: Word('намутишь', 5),
  singular3rdPerson: Word('намутит', 5),
  plural1stPerson: Word('намутим', 5),
  plural2ndPerson: Word('намутите', 5),
  plural3rdPerson: Word('намутят', 5),
  masculinePast: Word('намутил', 5),
  femininePast: Word('намутила', 5),
  neuterPast: Word('намутило', 5),
  pluralPast: Word('намутили', 5),
  imperativeInformal: Word('намути', 5),
  imperativeFormal: Word('намутите', 5),
  imperfect: [],
};

perfectVerbs.set(намутить.name.text, намутить);

export { намутить };