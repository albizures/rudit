import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сообразить: PerfectVerb = {
  name: Word('сообразить', 7),
  singular1stPerson: Word('соображу', 7),
  singular2ndPerson: Word('сообразишь', 7),
  singular3rdPerson: Word('сообразит', 7),
  plural1stPerson: Word('сообразим', 7),
  plural2ndPerson: Word('сообразите', 7),
  plural3rdPerson: Word('сообразят', 7),
  masculinePast: Word('сообразил', 7),
  femininePast: Word('сообразила', 7),
  neuterPast: Word('сообразило', 7),
  pluralPast: Word('сообразили', 7),
  imperativeInformal: Word('сообрази', 7),
  imperativeFormal: Word('сообразите', 7),
  imperfect: ['соображать'],
};

perfectVerbs.set(сообразить.name.text, сообразить);

export { сообразить };