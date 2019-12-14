import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сопроводить: PerfectVerb = {
  name: Word('сопроводить', 8),
  singular1stPerson: Word('сопровожу', 8),
  singular2ndPerson: Word('сопроводишь', 8),
  singular3rdPerson: Word('сопроводит', 8),
  plural1stPerson: Word('сопроводим', 8),
  plural2ndPerson: Word('сопроводите', 8),
  plural3rdPerson: Word('сопроводят', 8),
  masculinePast: Word('сопроводил', 8),
  femininePast: Word('сопроводила', 8),
  neuterPast: Word('сопроводило', 8),
  pluralPast: Word('сопроводили', 8),
  imperativeInformal: Word('сопроводи', 8),
  imperativeFormal: Word('сопроводите', 8),
  imperfect: ['сопровождать'],
};

perfectVerbs.set(сопроводить.name.text, сопроводить);

export { сопроводить };