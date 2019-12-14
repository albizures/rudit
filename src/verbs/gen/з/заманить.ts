import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заманить: PerfectVerb = {
  name: Word('заманить', 5),
  singular1stPerson: Word('заманю', 5),
  singular2ndPerson: Word('заманишь', 3),
  singular3rdPerson: Word('заманит', 3),
  plural1stPerson: Word('заманим', 3),
  plural2ndPerson: Word('заманите', 3),
  plural3rdPerson: Word('заманят', 3),
  masculinePast: Word('заманил', 5),
  femininePast: Word('заманила', 5),
  neuterPast: Word('заманило', 5),
  pluralPast: Word('заманили', 5),
  imperativeInformal: Word('замани', 5),
  imperativeFormal: Word('заманите', 5),
  imperfect: ['заманивать'],
};

perfectVerbs.set(заманить.name.text, заманить);

export { заманить };