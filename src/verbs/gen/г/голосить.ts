import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const голосить: PerfectVerb = {
  name: Word('голосить', 5),
  singular1stPerson: Word('голошу', 5),
  singular2ndPerson: Word('голосишь', 5),
  singular3rdPerson: Word('голосит', 5),
  plural1stPerson: Word('голосим', 5),
  plural2ndPerson: Word('голосите', 5),
  plural3rdPerson: Word('голосят', 5),
  masculinePast: Word('голосил', 5),
  femininePast: Word('голосила', 5),
  neuterPast: Word('голосило', 5),
  pluralPast: Word('голосили', 5),
  imperativeInformal: Word('голоси', 5),
  imperativeFormal: Word('голосите', 5),
  imperfect: [],
};

perfectVerbs.set(голосить.name.text, голосить);

export { голосить };