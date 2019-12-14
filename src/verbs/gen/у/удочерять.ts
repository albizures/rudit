import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const удочерять: PerfectVerb = {
  name: Word('удочерять', 6),
  singular1stPerson: Word('удочеряю', 6),
  singular2ndPerson: Word('удочеряешь', 6),
  singular3rdPerson: Word('удочеряет', 6),
  plural1stPerson: Word('удочеряем', 6),
  plural2ndPerson: Word('удочеряете', 6),
  plural3rdPerson: Word('удочеряют', 6),
  masculinePast: Word('удочерял', 6),
  femininePast: Word('удочеряла', 6),
  neuterPast: Word('удочеряло', 6),
  pluralPast: Word('удочеряли', 6),
  imperativeInformal: Word('удочеряй', 6),
  imperativeFormal: Word('удочеряйте', 6),
  imperfect: ['удочерить'],
};

perfectVerbs.set(удочерять.name.text, удочерять);

export { удочерять };