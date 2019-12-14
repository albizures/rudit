import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накопить: PerfectVerb = {
  name: Word('накопить', 5),
  singular1stPerson: Word('накоплю', 6),
  singular2ndPerson: Word('накопишь', 3),
  singular3rdPerson: Word('накопит', 3),
  plural1stPerson: Word('накопим', 3),
  plural2ndPerson: Word('накопите', 3),
  plural3rdPerson: Word('накопят', 3),
  masculinePast: Word('накопил', 5),
  femininePast: Word('накопила', 5),
  neuterPast: Word('накопило', 5),
  pluralPast: Word('накопили', 5),
  imperativeInformal: Word('накопи', 5),
  imperativeFormal: Word('накопите', 5),
  imperfect: ['копить'],
};

perfectVerbs.set(накопить.name.text, накопить);

export { накопить };