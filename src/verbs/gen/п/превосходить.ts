import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превосходить: PerfectVerb = {
  name: Word('превосходить', 9),
  singular1stPerson: Word('превосхожу', 9),
  singular2ndPerson: Word('превосходишь', 7),
  singular3rdPerson: Word('превосходит', 7),
  plural1stPerson: Word('превосходим', 7),
  plural2ndPerson: Word('превосходите', 7),
  plural3rdPerson: Word('превосходят', 7),
  masculinePast: Word('превосходил', 9),
  femininePast: Word('превосходила', 9),
  neuterPast: Word('превосходило', 9),
  pluralPast: Word('превосходили', 9),
  imperativeInformal: Word('превосходи', 9),
  imperativeFormal: Word('превосходите', 9),
  imperfect: ['превзойти'],
};

perfectVerbs.set(превосходить.name.text, превосходить);

export { превосходить };