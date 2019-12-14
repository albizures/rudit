import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доходить: PerfectVerb = {
  name: Word('доходить', 5),
  singular1stPerson: Word('дохожу', 5),
  singular2ndPerson: Word('доходишь', 3),
  singular3rdPerson: Word('доходит', 3),
  plural1stPerson: Word('доходим', 3),
  plural2ndPerson: Word('доходите', 3),
  plural3rdPerson: Word('доходят', 3),
  masculinePast: Word('доходил', 5),
  femininePast: Word('доходила', 5),
  neuterPast: Word('доходило', 5),
  pluralPast: Word('доходили', 5),
  imperativeInformal: Word('доходи', 5),
  imperativeFormal: Word('доходите', 5),
  imperfect: ['дойти'],
};

perfectVerbs.set(доходить.name.text, доходить);

export { доходить };