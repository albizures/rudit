import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const исходить: PerfectVerb = {
  name: Word('исходить', 5),
  singular1stPerson: Word('исхожу', 5),
  singular2ndPerson: Word('исходишь', 3),
  singular3rdPerson: Word('исходит', 3),
  plural1stPerson: Word('исходим', 3),
  plural2ndPerson: Word('исходите', 3),
  plural3rdPerson: Word('исходят', 3),
  masculinePast: Word('исходил', 5),
  femininePast: Word('исходила', 5),
  neuterPast: Word('исходило', 5),
  pluralPast: Word('исходили', 5),
  imperativeInformal: Word('исходи', 5),
  imperativeFormal: Word('исходите', 5),
  imperfect: ['изойти'],
};

perfectVerbs.set(исходить.name.text, исходить);

export { исходить };